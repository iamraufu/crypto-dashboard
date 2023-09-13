import React from 'react';
import summaryData from '../../data/dashboard/summaryData';
import eyeIcon from '../../images/dashboard/eye.svg'
// import Sparkline from '../GraphChart/Sparkline';

const Summary = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            {
                summaryData.map((item, index) =>
                    <div key={index} className="col-md-3 px-4">
                        <div className="bg-white rounded-4 p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt={item.title} />
                                        <div className="ms-3">
                                            <h2 className='text-title'>{item.title}</h2>
                                            <h3 className='text-sub-title'>{item.name}</h3>
                                        </div>
                                        {index === 0 && <img className='img-fluid ms-auto' src={eyeIcon} alt={item.title} />}
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        {
                                            index === 0 ?
                                                <h2 className='fw-bold h4'>{item.amount}</h2> :
                                                <h2 className='h5'>{item.amount}</h2>
                                        }
                                    </div>
                                </div>
                                {
                                    index !== 0 &&
                                    <img src={item.sparkImage} className='img-fluid' alt={item.title} />
                                    // <Sparkline sparkData={item.data} strokeColor={item.strokeColor} /> 

                                }
                            </div>

                            <div className="mt-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='text-sub-title'>{item.type}</h3>
                                    <h3 className='text-sub-title fw-bold'>{item.value1.slice(0, 1) === "+" ? <span className='text-sub-title-success'>{item.value1}</span> : <span className='text-sub-title-danger'>{item.value1}</span>}</h3>
                                    <h3 className='text-sub-title fw-bold'>{item.value2.slice(0, 1) === "+" ? <span className='text-sub-title-success bg-sub-title-success py-1 px-2 rounded-pill'>{item.value2}</span> : <span className='text-sub-title-danger bg-sub-title-danger py-1 px-2 rounded-pill'>{item.value2}</span>}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Summary;