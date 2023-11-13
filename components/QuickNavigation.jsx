

const QuickNavigation = () => {
    return (
        <>
            <div className="fixed bottom-64 -right-1">
                <div className="relative h-72">
                    <div className="group">
                        <img src={"/svg/triangle.svg"} alt="" className='scale-95 hover:scale-110 transition' />
                        <img src={"/svg/quick_menu.svg"} alt="" className='absolute top-11 right-6 z-10' />
                    </div>
                    <div className="group  absolute top-40">
                        <img src={"/svg/triangle_2.svg"} alt="" className='scale-95 group-hover:scale-110 transition' />
                        <img src={"/svg/quick_search.svg"} alt="" className='absolute -top-10 right-16 z-10' />
                    </div>
                    <div className="group  absolute top-[97px]">
                        <img src={"/svg/triangle_3.svg"} alt="" className='scale-125 hover:scale-[140%] transition' />
                        <img src={"/svg/quick_list.svg"} alt="" className='absolute top-28 right-6 z-10' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default QuickNavigation