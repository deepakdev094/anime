import { FunctionComponent } from "react";
import "./@api/api.config.ts";
import { WrappContext } from "./@context";
import CardSection from "./components/CardSection";
import Chart from "./components/Chart";
const App: FunctionComponent = () => {
  return (
    <WrappContext>
      <div className="bg-gray-200">
        <div className="py-6 px-8 md:px-20 lg:px-28 h-full text-sm">
          <CardSection />
          <div className="flex justify-center mt-10">
            <Chart />
          </div>
        </div>
      </div>
    </WrappContext>
  );
};

export default App;
