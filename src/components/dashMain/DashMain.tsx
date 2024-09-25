import React, { useState, useEffect } from 'react';
import './DashMain.css'
import ContItem from '../../utils/ContItem/ContItem';
//PHOTOS
import potho1 from '../../assets/1200sport.jpg'
import potho2 from '../../assets/1200STR.jpg'
import potho3 from '../../assets/1200NewIn.jpg'
//MATERIALES UI
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
//TYPES
import itemInfo from '../../interfaces/itemInfo';

const DashMain: React.FC = () => {
    const listInitialItems: itemInfo[] = [
        {
            title: 'Prueba',
            image: potho1,
            price: 123.56
        },
        {
            title: 'Prueba2',
            image: potho2,
            price: 123.56
        },
        {
            title: 'Prueba3',
            image: potho3,
            price: 123.56
        },
        {
            title: 'Prueba4',
            image: potho1,
            price: 123.56
        },
        {
            title: 'Prueba5',
            image: potho2,
            price: 123.56
        },
        {
            title: 'Prueba6',
            image: potho3,
            price: 123.56
        },
        {
            title: 'Prueba7',
            image: potho1,
            price: 123.56
        },
        {
            title: 'Prueba8',
            image: potho2,
            price: 123.56
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesBackground = [
        potho1,
        potho2,
        potho3
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % imagesBackground.length);
        }, 5000); // Desplazamiento automático cada 3 segundos

        return () => clearInterval(intervalId);
    }, [currentIndex, imagesBackground]);

    const [isCheck, setIsCheck] = useState(false);
    const [isCheck1, setIsCheck1] = useState(false);
    const [isCheck2, setIsCheck2] = useState(false);
    const [isCheck3, setIsCheck3] = useState(false);
    const [isCheck4, setIsCheck4] = useState(false);
    const [isCheck5, setIsCheck5] = useState(false);
    const [isCheck6, setIsCheck6] = useState(false);
    const [isCheck7, setIsCheck7] = useState(false);
    const [isCheck8, setIsCheck8] = useState(false);

    return (
        <div>
            <div className="carousel-container">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {imagesBackground.map((image, index) => (
                        <img key={index} src={image} />
                    ))}
                </div>
            </div>
            <div className="contAllDash">
                <div/>
                <div className="contAllbutts">
                    <div className="contAllbuttsRows">
                        <button onClick={() => setIsCheck(!isCheck)}>
                            Camisas
                            {!isCheck ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck1(!isCheck1)}>
                            Gorras
                            {!isCheck1 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck2(!isCheck2)}>
                            Pantalones
                            {!isCheck2 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck3(!isCheck3)}>
                            Blusas
                            {!isCheck3 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                    </div>
                    <div className="contAllbuttsRows">
                        <button onClick={() => setIsCheck4(!isCheck4)}>
                            Relojes
                            {!isCheck4 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck5(!isCheck5)}>
                            Bolsos
                            {!isCheck5 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck6(!isCheck6)}>
                            Deportivos
                            {!isCheck6 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck7(!isCheck7)}>
                            Shorts
                            {!isCheck7 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                        <button onClick={() => setIsCheck8(!isCheck8)}>
                            Jeans
                            {!isCheck8 ? <MdClose size={20} /> : <FaCheck size={18} />}
                        </button>
                    </div>
                </div>
                <div className="contAllrenderItems">
                    {listInitialItems.map((item)=><ContItem item={item}/>)}
                </div>
            </div>
        </div>
    );
};

export default DashMain;