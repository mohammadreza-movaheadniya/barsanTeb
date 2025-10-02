  {isMobileNavShow && (
                // <div className="block lg:hidden" >
                  <div className="fixed inset-0 z-30 lg:hidden flex">

                    {/* overlays */}
                    <div className="absolute inset-0 bg-[#00000080] " onClick={() => setisMobileNavShow(false)}></div>
                    <div className=" relative w-full inset-0 z-20 ">
                        <div className="bg-white w-full h-fit shadow-lg">
                            <ul className="flex flex-col justify-center items-center p-4">
                                {menuData.map((item, index) => (
                                    <li key={index} className="py-2 border-gray-200">
                                        <Link href={`/${item.link}`}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}