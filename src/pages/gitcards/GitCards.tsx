import { useEcommerceQuery } from "../../hooks/GetRequest";
import { Card, Rate, Spin } from "antd";
import { Item } from "../../types";

const GitCards = () => {
  const { data, isLoading, isPending, error } = useEcommerceQuery();

  if (isPending || isLoading) return <Spin style={{display:"flex",margin:"auto",justifyContent:"center",alignItems:"center",height:"100vh",}} size="large"  className="flex justify-center items-center m-auto h-screen"/>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="item-container">
        {data &&
          data.map((item: Item, index: number) => (
            <div key={index}>
              <Card
                style={{ width: "500px",  margin: "10px" }}
                key={index}
                className="item-card"
                cover={
                  <img
                    style={{ width:"300px" , height: "300px" }}
                    alt={item.title}
                    src={item.image}
                  />
                }
              >
                <Card.Meta title={item.title} description={item.description} />
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                <Rate allowHalf disabled defaultValue={item.rating.rate} />
                <p>Rating Count: {item.rating.count}</p>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GitCards;
