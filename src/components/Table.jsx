import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TablePDFDocument from './TablePDFDocument';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser,setSelectedUser]=useState([])
  const [showmore,setShowmore]=useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(users);
const showUserdetails =(data)=>{
    setShowmore(!showmore)
    setSelectedUser(data)
}
const handleModal=(value)=>{
    setShowmore(value)
}
  return (
    <div className="w-full p-4">
      <div className="flex justify-end mb-4">
      <PDFDownloadLink
          document={<TablePDFDocument users={users} />}
          fileName="table-data.pdf"
          className="flex items-center px-4 py-2 text-white bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {({ loading }) => (
            <>
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              {loading ? "Preparing document..." : "Download"}
            </>
          )}
        </PDFDownloadLink>
      </div>

      <div className="overflow-hidden rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full w-full text-sm text-left text-black">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-4 py-2">No.</th>
                <th scope="col" className="px-4 py-2">Name</th>
                <th scope="col" className="px-4 py-2">Username</th>
                <th scope="col" className="px-4 py-2">Email</th>
                <th scope="col" className="px-4 py-2">Phone Number</th>
                <th scope="col" className="px-4 py-2">More details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((val) => (
                <tr key={val.id} className="bg-white border-b text-black hover:bg-gray-100 transition-colors">
                  <th scope="row" className="px-4 py-2 font-medium whitespace-nowrap">{val.id}</th>
                  <td className="px-4 py-2">{val.name}</td>
                  <td className="px-4 py-2">{val.username}</td>
                  <td className="px-4 py-2">
                    <span className="font-semibold">{val.email}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="font-semibold">{val.phone}</span>
                  </td>
                  <td className="px-6 py-4 flex space-x-6">
                    <button onClick={() =>showUserdetails(val) } className="text-blue-600 hover:underline">
                      View more
                    </button>
                  </td>
                </tr>
              ))}
              {showmore && <Modal userdatas={selectedUser}handleStatus={handleModal}/>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
