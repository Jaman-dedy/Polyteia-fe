import { useEffect } from "react"
import HomeComponent from "../../components/Home"
import { useAppDispatch, useAppSelector } from "../../hook/useDispatch";
import { fetchNumericData } from "../../redux/actions/fetchNumericData";
import { fetchRandomData } from "../../redux/actions/fetchRandomData";

const Home = () => {
    const dispatch = useAppDispatch();
    const numericData = useAppSelector((state: any) => state.numericData);
    const randomData = useAppSelector((state: any) => state.randomData);

    useEffect(() => {
        if (numericData.data.length === 0) {
            dispatch(fetchNumericData())
        }

        if (randomData.data.length === 0) {
            dispatch(fetchRandomData())
        }
    }, [dispatch, numericData.data.length, randomData.data.length])

    return (
        <HomeComponent numericData={numericData.data} randomData={randomData.data} />
    )
}

export default Home