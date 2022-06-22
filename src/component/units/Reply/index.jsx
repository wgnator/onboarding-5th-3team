import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const ReplyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const ReplyImg = styled.img`
  width: 3%;
  margin: 0px 3px 0px 10px;
`;
const ReplyInput = styled.input`
  width: 80%;
  background-color: none;
  ::placeholder {
    font-size: 10px;
  }
`;
const Submit = styled.button`
  background-color: white;
  font-size: 10px;
  cursor: pointer;
  color: #3e99df;
`;
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const Comment = styled.div`
  font-size: 10px;
`;
export default function Reply(props) {
  const [reply, setReply] = useState([]);
  const SubmitRef = useRef(null);
  const SubmitComment = (event) => {
    if (event.keyCode === 13 && event.target.value !== ' ') {
      setReply([...reply, event.target.value]);
      event.target.value = '';
    }
  };
  const onClickSubmit = () => {
    setReply([...reply, SubmitRef.current?.value]);
    SubmitRef.current.value = '';
  };
  return (
    <>
      <CommentWrapper>
        {reply.map((el, index) => (
          <Comment key={index}>{el}</Comment>
        ))}
      </CommentWrapper>
      <ReplyWrapper>
        <ReplyImg src="/smile.png" />
        <ReplyInput
          ref={SubmitRef}
          onKeyUp={SubmitComment}
          type="text"
          placeholder="댓글을 입력해주세요."
        />
        <Submit onClick={onClickSubmit}>게시</Submit>
      </ReplyWrapper>
    </>
  );
}