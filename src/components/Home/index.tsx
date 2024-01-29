import { useState } from 'react'
import type { SelectChangeEvent} from "@mui/material";
import { Container, Grid, Typography } from "@mui/material"
import MainTemplate from "../../template/MainTemplate"
import MSelect from "../../atoms/Select"
import { GraphType } from "../../types";
import { graphComponents } from '../../atoms/Charts'

const Home = () => {
    const [selectedGraph, setSelectedGraph] = useState<GraphType | undefined>(undefined);

    const handleGraphChange = (event: SelectChangeEvent<string>) => {
        setSelectedGraph(event.target.value as GraphType);
    };

    const SelectedGraphComponent = selectedGraph ? graphComponents[selectedGraph] : null;


    return (
        <MainTemplate>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back 👋
                </Typography>
                <Grid container spacing={3}>
                    <Grid xs={12} md={6} lg={4}>
                        <MSelect selectedGraph={selectedGraph} onSelect={handleGraphChange} options={Object.values(GraphType)} />
                    </Grid>
                    <Grid xs={12} md={6} lg={12}>
                    {SelectedGraphComponent && <SelectedGraphComponent />}
                    </Grid>
                </Grid>
            </Container>
        </MainTemplate>
    )
}

export default Home