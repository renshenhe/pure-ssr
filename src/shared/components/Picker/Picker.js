/* @flow */

import React from 'react';

type Props = {
  value: String,
  onChange: Function,
  options: Object,
};
const Picker = ({
  value,
  onChange,
  options,
}: Props) => (
  <span>
    <h1>{value}</h1>
    <select
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      { options.map(option =>
          <option value={option} key={option}>
            { option }
          </option>
        )
      }
    </select>
  </span>
)

export default Picker;