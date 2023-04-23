import styled from "@emotion/styled";

const DetailBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
  border-color: ${(props) => props.theme.color.red};
`;

const Detail = () => {
  return <DetailBox></DetailBox>;
};

export default Detail;
