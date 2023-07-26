import BasicLayout from "@/layouts/BasicLayout";

const MyPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasicLayout>
      MY PAGE
      {children}
    </BasicLayout>
  );
};

export default MyPage;
