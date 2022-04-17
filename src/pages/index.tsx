/* eslint-disable @typescript-eslint/explicit-function-return-type */

import * as React from "react";
import { ClassNames } from "@emotion/react";

export default function Index() {

  return (
    <ClassNames>
      {({ css }) =>
        <h1 className={`${css({ "color": "red" })} green`}> 
          Should be green
        </h1>
      }
    </ClassNames>
  );

}
