import MainLayout from "./layouts/MainLayout";
import TabLayout from "./layouts/TabLayout";
import { TabsConfig } from "./utils/tab.config";

function App() {
  return (
    <MainLayout>
      <TabLayout data={TabsConfig} />
    </MainLayout>
  );
}

export default App;
