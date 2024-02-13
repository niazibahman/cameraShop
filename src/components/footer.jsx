export default function Footer() {
    return (
        <footer className="absolute bottom-8 inset-x-0 hidden lg:grid grid-cols-12 gap-2">
            <div className="col-span-10 h-full">
                <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1139 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 23.2913C0 15.0526 0 10.9334 1.5331 7.7979C2.82504 5.15566 4.8529 3.00129 7.33998 1.62875C10.2913 0 14.1687 0 21.9236 0H1039.67C1047.42 0 1051.3 0 1054.25 1.62875C1056.74 3.00129 1058.76 5.15566 1060.05 7.7979C1061.59 10.9334 1061.59 15.0528 1061.59 23.2913V61.4517H0V23.2913Z" fill="#B8AE99" />
                    <path d="M1123.56 10.5913C1115.99 3.75438 1106.39 0 1096.46 0H983.331V61.4517H1113.73C1136.34 61.4517 1146.71 31.5148 1129.48 15.9428L1123.56 10.5913Z" fill="#B8AE99" />
                </svg>
                {/* <img src="/svg/category.svg" alt="" className="w-full h-full"/> */}
            </div>
            <div className="col-span-2 h-full">
                <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 204 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.8557 22.54C41.8557 14.5671 41.8557 10.5807 43.4319 7.54636C44.7602 4.98935 46.8451 2.90447 49.4021 1.57621C52.4364 0 56.423 0 64.396 0H187.526C193.221 0 196.068 0 198.236 1.12587C200.062 2.07462 201.551 3.56382 202.5 5.39026C203.626 7.55764 203.626 10.4051 203.626 16.1V61.4545H41.8557V22.54Z" fill="#B8AE99" />
                    <path d="M18.1682 9.90042C25.8841 3.50189 35.5929 0 45.6167 0H170.187V61.4545H25.3115C1.89907 61.4545 -8.66883 32.1555 9.35297 17.2106L18.1682 9.90042Z" fill="#B8AE99" />
                </svg>
                {/* <img src="/svg/basketCart.svg" alt="" className="w-full h-full"/> */}
            </div>
        </footer>
    );
}