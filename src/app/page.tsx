import { Counter as CounterByUseState } from "@/components/counter-usestate";

import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="grid grid-row-2">
      <CounterByUseState initialCount={10} />
    </div>
  );
};

export default Home;
