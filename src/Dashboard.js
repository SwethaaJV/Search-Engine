import React, { useState, useEffect } from 'react';
import { Button, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './Logo.png';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const [searchPost, setSearchPost] = useState('');
    const [activeLink, setActiveLink] = useState('');
    const [carData, setCarData] = useState([]);

    const handleSearchPost = (e) => {
        setSearchPost(e.target.value);
    };

    const handleLinkClick = (id) => {
        setActiveLink(id);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://car-data.p.rapidapi.com/cars',
                    params: {
                        limit: '4',
                        page: '0'
                    },
                    headers: {
                        'X-RapidAPI-Key': '279461fab5msh9b13cd729218beep18ee48jsne31be304b7af',
                        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
                    }
                };
                const response = await axios.request(options);
                setCarData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'make',
            key: 'make'
        }
    ];
 
    return (
        <>
        <BrowserRouter>
            <nav className='header'>
                <div className='search-container'>
                    <Input
                        className='post-search'
                        prefix={<SearchOutlined />}
                        placeholder='Search here'
                        value={searchPost}
                        onChange={handleSearchPost}
                    /> 
                </div>
                <div className='right-items'>
                    <Button className='profile-icon' icon={<img src={Logo} className='profile' alt='profile' />} />
                    <h5 className='user-name'>welcome john</h5>
                </div>
            </nav>
            <hr />
            <div className='list-items'>
                <div className="link-container">
                    <Link to='#explanation' className={activeLink === 'explanation' ? 'active-link' : 'link'} onClick={() => handleLinkClick('explanation')}>Explanation</Link>
                    <Link to='#images' className={activeLink === 'images' ? 'active-link' : 'link'} onClick={() => handleLinkClick('images')}>Images</Link>
                    <Link to='#mcq' className={activeLink === 'mcq' ? 'active-link' : 'link'} onClick={() => handleLinkClick('mcq')}>MCQ</Link>
                    <Link to='#videos' className={activeLink === 'videos' ? 'active-link' : 'link'} onClick={() => handleLinkClick('videos')}>Videos</Link>                      <Link to='#Discussion' className={activeLink === 'discussion' ? 'active-link' : 'link'} onClick={() => handleLinkClick('discussion')}>Discussion on the Topic</Link>
                
                </div>
            </div>
            <div className='phase3'>
            <div className='title-table' id='explanation'>
                <Table className="table" columns={columns} dataSource={carData} pagination={false}/>
            </div>
            </div>

            </BrowserRouter>
        </>
    );
};

export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { Button, Input, Table } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import { HashLink as Link } from 'react-router-hash-link';
// import Logo from './Logo.png';
// import './Dashboard.css';
// import axios from 'axios';

// const Dashboard = () => {
//     const [searchPost, setSearchPost] = useState('');
//     const [activeLink, setActiveLink] = useState('');
//     const [carData, setCarData] = useState([]);
//     const [expandedRowId, setExpandedRowId] = useState(null);

//     const handleSearchPost = (e) => {
//         setSearchPost(e.target.value);
//     };

//     const handleLinkClick = (id) => {
//         setActiveLink(id);
//     };

//     const handleMoreInfoClick = (id) => {
//         setExpandedRowId(expandedRowId === id ? null : id);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const options = {
//                     method: 'GET',
//                     url: 'https://car-data.p.rapidapi.com/cars',
//                     params: {
//                         limit: '4',
//                         page: '0'
//                     },
//                     headers: {
//                         'X-RapidAPI-Key': '279461fab5msh9b13cd729218beep18ee48jsne31be304b7af',
//                         'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
//                     }
//                 };
//                 const response = await axios.request(options);
//                 setCarData(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchData();
//     }, []);

//     const columns = [
//         {
//             title: 'Title',
//             dataIndex: 'make',
//             key: 'make'
//         },
//         {
//             title: 'More Info',
//             key: 'moreInfo',
//             render: (text, record) => (
//                 <Button type="link" onClick={() => handleMoreInfoClick(record.id)}>
//                     More Info
//                 </Button>
//             )
//         }
//     ];

//     const expandedRowRender = (record) => {
//         return (
//             <div>
//                 {expandedRowId === record.id && (
//                     <div>
//                         <p>ID: {record.id}</p>
//                         <p>Year: {record.year}</p>
//                         <p>Model: {record.model}</p>
//                         <p>Type: {record.type}</p>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <>
//         <BrowserRouter>
//             <nav className='header'>
//                 <div className='search-container'>
//                     <Input
//                         className='post-search'
//                         prefix={<SearchOutlined />}
//                         placeholder='Search here'
//                         value={searchPost}
//                         onChange={handleSearchPost}
//                     />
//                 </div>
//                 <div className='right-items'>
//                     <Button className='profile-icon' icon={<img src={Logo} className='profile' alt='profile' />} />
//                     <h5 className='user-name'>welcome john</h5>
//                 </div>
//             </nav>
//             <hr />
//             <div className='list-items'>
//                 <div className="link-container">
//                     <Link to='#explanation' className={activeLink === 'explanation' ? 'active-link' : 'link'} onClick={() => handleLinkClick('explanation')}>Explanation</Link>
//                     <Link to='#images' className={activeLink === 'images' ? 'active-link' : 'link'} onClick={() => handleLinkClick('images')}>Images</Link>
//                     <Link to='#mcq' className={activeLink === 'mcq' ? 'active-link' : 'link'} onClick={() => handleLinkClick('mcq')}>MCQ</Link>
//                     <Link to='#videos' className={activeLink === 'videos' ? 'active-link' : 'link'} onClick={() => handleLinkClick('videos')}>Videos</Link>
//                     <Link to='#Discussion' className={activeLink === 'discussion' ? 'active-link' : 'link'} onClick={() => handleLinkClick('discussion')}>Discussion on the Topic</Link>
//                 </div>
//             </div>
//             <div className='phase3'>
//                 <div className='title-table' id='explanation'>
//                     <Table
//                         className="table"
//                         columns={columns}
//                         dataSource={carData}
//                         pagination={false}
//                         expandedRowRender={expandedRowRender}
//                         expandRowByClick
//                     />
//                 </div>
//             </div>
//         </BrowserRouter>
//         </>
//     );
// };

// export default Dashboard;
