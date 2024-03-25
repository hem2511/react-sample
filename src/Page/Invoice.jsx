import React from 'react'
import { useRef } from 'react'
import ReactToPrint, { useReactToPrint } from 'react-to-print'

const Invoice = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:() => componentRef.current,
    })
    return (
        <div className='p-3 bg-gray-50'>
            <ReactToPrint 
                trigger={() => (
                <button 
                    type='button' 
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center '
                >
                    Download
                </button>
                )}
                content={() => componentRef.current}
            />
            <div className='shadow-lg rounded-lg bg-white p-3 ' ref={componentRef}>
                {/* <div className='flex flex-row justify-between px-3 py-3'> */}
                <div className='grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-2  px-3 py-3'>
                    <div>
                        <h1 className='text-2xl font-bold mb-2'>Fillo Desgin Agency</h1>
                        <h1 className='font-medium'>No.4, Empire City Part-1, Kakkular, Thiruvallur, - 602001</h1>
                        <h1 className='font-medium'><span>GSTIN/UIN - </span> 33AAPPV5748R1Z1</h1>
                        <h1 className='font-medium'><span>Contact - </span> +91-8778171928 / +91-8778171928</h1>
                        <h1 className='font-medium'><span>Email - </span> unandhakumar2000@gmail.com</h1>
                    </div>
                    <div className='justify-self-auto md:justify-self-end '>
                        <img
                            src='https://img.logoipsum.com/297.svg'                            
                            alt='logo'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-y-3 gap-x-1  md:grid-cols-1 xl:grid-cols-3  px-3 py-3'>
                    <div>
                        <h1>Bill To</h1>
                        <h1 className='font-bold text-xl mb-2'>Fillo Desgin Agency</h1>
                        <h1 className='font-medium'>No.4, Empire City Part-1, Kakkular, Thiruvallur, - 602001</h1>
                        <h1 className='font-medium'><span>GSTIN/UIN - </span> 33AAPPV5748R1Z1</h1>
                        <h1 className='font-medium'><span>Contact - </span> +91-8778171928 / +91-8778171928</h1>
                        <h1 className='font-medium'><span>Email - </span> unandhakumar2000@gmail.com</h1>
                    </div>
                    <div>
                        <h1>Ship To</h1>
                        <h1 className='font-bold text-xl mb-2'>Fillo Desgin Agency</h1>
                        <h1 className='font-medium'>No.4, Empire City Part-1, Kakkular, Thiruvallur, - 602001</h1>
                        <h1 className='font-medium'><span>GSTIN/UIN - </span> 33AAPPV5748R1Z1</h1>
                        <h1 className='font-medium'><span>Contact - </span> +91-8778171928 / +91-8778171928</h1>
                        <h1 className='font-medium'><span>Email - </span> unandhakumar2000@gmail.com</h1>
                    </div>
                    <div >
                        <table className="border-collapse border border-slate-400 w-full font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        Invoice No
                                    </th>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        INV240001
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        Invoice Date
                                    </th>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        01-02-2024
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        Due Date
                                    </th>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        01-02-2024
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        Source
                                    </th>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        SO-00024
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        Place Of Supply
                                    </th>
                                    <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                        Tamil Nadu[33]
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" px-3 overflow-x-auto  mt-5 mb-5">
                    <table className="table-fixed border-collapse border border-slate-400 w-full font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="font-medium text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    SI.No
                                </th>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    HSN/SAC
                                </th>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    Unit Price
                                </th>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    Taxes
                                </th>
                                <th scope="col" className="px-6 py-3 border border-slate-300">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
                                <td className="px-6 py-4 border border-slate-300">
                                    1
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    85071000
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    10
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    5,000.00
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    28%
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    50,000.00
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
                                <td className="px-6 py-4 border border-slate-300">
                                    2
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    85072000
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    20
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    6,000.00
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    28%
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    1,20,000.00
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
                                <td className="px-6 py-4 border border-slate-300">
                                    3
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    85071000
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    02
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    500.00
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    28%
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    1,000.00
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
                                <td className="px-6 py-4 border border-slate-300">
                                    4
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    85044010
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    01
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    8,000.00
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    18%
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    8,000.00
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 border border-slate-300">
                                    5
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    8507
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    03
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    7,500.00
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    5%
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    22,500.00
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row" colSpan={5} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    Total Amount In Words:
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    Sub Total
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    2,01,500.00
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan={5} className="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    Two Lakhs Nineteen Thousand One hundred ThirtyFive Only.
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    CGST
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    8,817.50
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" rowSpan={2} colSpan={5} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                                    
                                </th>
                                <td className="px-6 py-4 border border-slate-300">
                                    SGST
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    8,817.50
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 border border-slate-300">
                                    Total
                                </td>
                                <td className="px-6 py-4 border border-slate-300">
                                    2,19,135.00
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-2  px-3 py-3 mt-16'>
                    <div className=''>
                        <h1>Terms & Conditions</h1>
                        <p>
                            Request payment by EOM. A 50% upfront payment is required to begin working on [insert name] project.
                            Payment is to be made upon receipt.
                        </p>
                    </div>
                    <div className='flex flex-col justify-self-end'>
                        <div className='font-medium my-2'>For Fillo Desgin Agency</div>
                        <div>This is Computer generated invoice no signature Required</div>
                        <div className='font-medium my-2'>Authorised Signatory</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice