export interface Filter {
    title: string;
    id: string;
    type: 'list-filter' | 'btn-filter';
    content: {
        id?: string;
        shown?: boolean;
        title: string;
        value?: string;
        values?: { title: string, checked: boolean }[];
        selectedValue?: string;
        checked?: boolean;
    }[]
}