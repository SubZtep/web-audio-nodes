/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "@emotion/core"
import { Handle, Position, OnConnectFunc } from "react-flow-renderer"

type Props = {
  numberOfOutputs: number
  onConnect?: OnConnectFunc
}

export default ({ numberOfOutputs, onConnect }: Props) => (
  <Fragment>
    {new Array(numberOfOutputs).fill(0).map((_value, index) => (
      <Handle
        key={`output${index}`}
        type="source"
        position={Position.Bottom}
        style={{ left: `${(100 / (numberOfOutputs + 1)) * (index + 1)}%`, background: "#B0BF1A" }}
        onConnect={onConnect}
      />
    ))}
  </Fragment>
)
