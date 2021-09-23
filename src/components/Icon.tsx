import React from 'react';

// require('icons/money.svg');
// require('icons/tag.svg');
// require('icons/chart.svg');

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (e) {
  console.log(e);
}

type Props = {
  name: String,
};

const Icon = (props: Props) => {
  const {name} = props;

  return (
    <svg className="icon">
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;