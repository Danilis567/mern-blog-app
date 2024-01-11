import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GetContact() {
  const [loader, setLoader] = useState(true);
  const [contact, setContact] = useState([]);
  const uri = "http://localhost:4000/contacts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(uri);
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setContact(sortedPosts);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [uri, contact]);

  return (
    <div className="mt-12 overflow-x-auto">
      <h1 className="text-3xl mb-6 text-white">İletişim İstekleri</h1>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-slate-900 text-white">
              <tr className="text-white">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Ad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Mesaj
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Telefon no
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Tarih
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="bg-primary-bgDark divide-y divide-gray-200">
              {contact.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
