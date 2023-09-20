import LectureContainer from "@/components/LectureContainer";
const IntranetPage = () => {
  return (
    <LectureContainer>
      <h1>Intranet</h1>
      <iframe src="http://localhost:3000/intranet.pdf" frameBorder="0"></iframe>
    </LectureContainer>
  );
};

export default IntranetPage;
