import Header from "../components/Header";
import Row from "../components/Row";
import { useState, useEffect } from "react";
import { getComments } from "../repository/getComments";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import { BeatLoader } from "react-spinners";

function Dashboard() {
  const [commentsList, setCommentsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  let [loading, setLoading] = useState(true);

  const handleOpenModal = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecord(null);
  };

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const comments = await getComments();
      if (comments) {
        setCommentsList(comments);
      }
      setLoading(false);
    };

    fetchComments();
  }, []);

  const indexOfLastComment = currentPage * itemsPerPage;
  const indexOfFirstComment = indexOfLastComment - itemsPerPage;
  const currentComments = commentsList.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(commentsList.length / itemsPerPage);
  const totalResults = commentsList.length;

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="max-h-[800px] max-w-[800px] mx-auto overflow-y-auto border rounded-lg shadow-md">
        {loading ? (
          <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <BeatLoader color="rgba(34, 34, 153, 1)" margin={-2} size={19} />
          </div>
        ) : (
          <>
            <table className="min-w-full bg-white border-collapse">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-2 px-4 font-bold text-left">ID</th>
                  <th className="py-2 px-4 font-bold text-left">Name</th>
                  <th className="py-2 px-4 font-bold text-left">Email</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {currentComments.map((record) => (
                  <Row
                    key={record.id}
                    record={record}
                    onViewDetail={() => handleOpenModal(record)}
                  />
                ))}
              </tbody>
            </table>

            {showModal && selectedRecord && (
              <Modal
                id={selectedRecord.id}
                name={selectedRecord.name}
                email={selectedRecord.email}
                body={selectedRecord.body}
                handleClose={handleCloseModal}
              />
            )}
          </>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Dashboard;
