import { useEffect } from "react"
import HomeComponent from "../../components/Home"
import { useAppDispatch, useAppSelector } from "../../hook/useDispatch";
import { fetchNumericData } from "../../redux/actions/fetchNumericData";
import { fetchRandomData } from "../../redux/actions/fetchRandomData";

const Home = () => {
    const dispatch = useAppDispatch();
    const numericData = useAppSelector((state: any) => state.numericData);
    const randomData = useAppSelector((state: any) => state.randomData);
    console.log('numericData :>> ', numericData);
    console.log('randomData :>> ', randomData);

    useEffect(() => {
       dispatch(fetchNumericData()) 
        dispatch(fetchRandomData())
    }, [dispatch])

    return (
        <HomeComponent />
    )
}

export default Home