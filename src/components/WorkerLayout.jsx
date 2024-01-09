import React from "react";

function WorkerLayout() {
    return(
        <>
            <div className="relative h-screen">
                <img
                    src="/images/landscape8.jpg"
                    alt="Background Image"
                    className="w-full h-full object-cover absolute z-0"
                />
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white z-10 w-full max-w-[500px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Worker</h1>
                    <p className="text-lg">
                        Welcome to the ultimate online destination – where quality meets convenience, and your shopping desires come to life!
                    </p>
                </div>
            </div>
        </>
    );
}
export default WorkerLayout;