import { Button } from "antd";

type FilterButtonType = {
    children: JSX.Element | JSX.Element[] | string,
    onClick?: Function,
}

const FilterButton = ({ children }: FilterButtonType) => {
    return (
        <Button style={{ background: '#FFF', alignItems: 'center' }} type="text">{children}</Button>
    );
}
 
export default FilterButton;