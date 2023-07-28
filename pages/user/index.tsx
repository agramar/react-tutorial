import { GET_USER_REQUEST } from "@/actions/user";
import BasicLayout from "@/components/layouts/BasicLayout";
import useInput from "@/hooks/useInput";
import { Button } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  const id = useSelector((state: any) => state.user.id);
  const name = useSelector((state: any) => state.user.name);
  const [user, onChangeTextarea] = useInput({ id, name });

  useEffect(() => {
    console.log(user);
  }, []);

  const handleLoadButtonClick = useCallback(() => {
    dispatch({
      type: GET_USER_REQUEST,
      data: {
        id: "agramar",
        name: "아그라마",
      },
    });
  }, [dispatch]);

  const handleAlertButtonClick = useCallback(() => {
    alert();
  }, []);

  return (
    <BasicLayout>
      <p>MY PAGE</p>
      <textarea onChange={onChangeTextarea}></textarea>
      <Button onClick={handleLoadButtonClick}>load</Button>
      <Button onClick={handleAlertButtonClick}>alert</Button>
      {children}
    </BasicLayout>
  );
};

export default MyPage;
