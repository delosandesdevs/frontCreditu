import NavigateBtn from "./NavigateBtn/NavigateBtn"

const Pagination = () => {
    return <div className="pagination">
        <NavigateBtn direction={'Anterior'} arrow={'left'} />
        <NavigateBtn direction={'Siguiente'} arrow={'right'} />
    </div>
}

export default Pagination;