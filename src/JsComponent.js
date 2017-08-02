import React from 'react'
import * as RX from 'reactxp'

const JsComp = ({children, ...props}) => <RX.Text {...props}>{children + '???'}</RX.Text>

export default JsComp