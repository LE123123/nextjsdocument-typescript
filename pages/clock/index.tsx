import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Examples from "../../components/example";
import Link from "next/link";
import { startClock } from "../../modules/timer";

const Clock = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);
  return (
    <div>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </div>
  );
};

export default Clock;
