import React from "react";
import { useParams } from "react-router";

export default function JobAdvertDetail() {
  let { id } = useParams();

    return(
    <div>
        urun : {id}




    </div >
    )
}
