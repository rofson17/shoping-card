import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import {Container, Spinner} from "react-bootstrap";
import Items from "./Items";

const queryClient = new QueryClient();

const Card= ()=>{


    let {data, isLoading , error}=useQuery('shopData', async ()=>{
        return    await (await fetch("https://fakestoreapi.com/products/")).json();
    })

    if (isLoading)return (
                <div className=" d-flex justify-content-center  align-items-center " style={{height:"100%"}}>
                    <Spinner animation="grow" size="lg"  variant="primary" />
                    <Spinner animation="grow" size="lg" variant="danger" />
                    <Spinner animation="grow" size="lg" variant="success" />
                </div>
    )

    if (error) return (
        <div className=" d-flex justify-content-center  align-items-center " style={{height:"100%"}}>
            <h1 className="text-center text-danger my4">Server error</h1>
        </div>
    )

    // console.log(data[0]);
    return( <Container className="mt-5">
            <h2 className="my-5 text-center border-bottom text-capitalize text-primary">Our Products </h2>
            <div className="row gy-4">



                {
                    data.map((value, n)=>{
                        return <Items image={value["image"]} description={value["description"]} title={value["title"]} price={value["price"]}/>
                    })
                }
                </div>

        </Container>
    )
}


const Shop=()=>{
    document.title="Shop- Card";

    return (
        <section className="" style={{height:"80vh"}}>
            <QueryClientProvider client={queryClient}>
                    <Card />
            </QueryClientProvider>

        </section>
    )
}

export default  Shop;