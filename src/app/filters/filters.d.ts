export interface Filter {
    title: string;
    id: string;
    type: 'list-filter' | 'btn-filter';
    content: {
        title: string;
        value: string;
        state: boolean;
    }[]
}