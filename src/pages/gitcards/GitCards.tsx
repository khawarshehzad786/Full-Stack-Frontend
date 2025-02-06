import { useEcommerceQuery } from "../../hooks/GetRequest";
import { Card, Rate, Spin } from "antd";
import { Item } from "../../types";

const GitCards = () => {
  const { data, isLoading, isPending, error } = useEcommerceQuery();

  if (isPending || isLoading) return <Spin style={{display:"flex",margin:"auto",justifyContent:"center",alignItems:"center",height:"100vh",}} size="large"  className="flex justify-center items-center m-auto h-screen"/>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="p-4">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'flex-start' }}>
        {data &&
          data.map((item: Item, index: number) => (
            <div key={index} style={{ flex: '1 1 calc(25% - 16px)', maxWidth: 'calc(25% - 16px)' }}>
              <Card
                style={{ width: "100%" ,height:"550px"}}
                cover={
                  <img
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                    alt={item.title}
                    src={item.image}
                  />
                }
              >
                <Card.Meta title={item.title} description={item.description.slice(0,100)} />
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