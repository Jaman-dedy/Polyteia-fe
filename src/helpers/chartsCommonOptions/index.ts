import type { ChartOptions } from "../../types";

export const commonChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
        },
    },
};

export const lineAreaChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Line Area Chart',
    },
};

export const bubbleChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Bubble Chart',
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const doughnutChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Doughnut Chart',
    },
};

export const horizontalBarChartOptions = {
    ...commonChartOptions,
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    plugins: {
        ...commonChartOptions.plugins,
        legend: {
            position: 'right' as const,
        },
        title: {
            ...commonChartOptions.plugins.title,
            text: 'Horizontal Bar Chart',
        },
    },
};

export const lineChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Line Chart',
    },
}

export const multilineChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Multi line Chart',
    },
}

export const pieChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Pie line Chart',
    },
}

export const polarChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Polar area Chart',
    },
}

export const radarChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Radar Chart',
    },
}

export const scatterChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Scatter Chart',
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const stackedChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Stacked bar Chart',
    },
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
}

export const verticalChartOptions = {
    ...commonChartOptions,
    title: {
        ...commonChartOptions.plugins.title,
        text: 'Vertical Chart',
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};