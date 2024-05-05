import { Counter as CounterByUseState } from "@/components/counter-usestate";
import { Counter as CounterByXState } from "@/components/counter-xstate";

import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="grid grid-row-2 mb-2">
      <CounterByUseState initialCount={10} />
      <CounterByXState initialCount={10} />
    </div>
  );
};

export default Home;
