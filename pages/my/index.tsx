import BasicLayout from "@/components/layouts/BasicLayout";
import useInput from "@/hooks/useInput";
import { GET_USER } from "@/reducers/user";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyPage = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const userState = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch({ type: GET_USER });
  });

  const handleButtonClick = useCallback(() => {
    dispatch({ type: GET_USER });
  }, []);

  const [user, onChangeTextarea] = useInput(userState);

  return (
    <BasicLayout>
      <p>MY PAGE</p>
      <textarea onChange={onChangeTextarea}></textarea>
      <button onClick={handleButtonClick}>유저정보불러오기</button>
    </BasicLayout>
  );
};

export default MyPage;
