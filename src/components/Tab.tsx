const Tab = (props: any) => {
  const { name } = props.tab;
  const { activeTab, changeActiveTab } = props;

  return (
    <li
      className={name.toLowerCase() === activeTab ? "is-active" : ""}
      onClick={() => changeActiveTab(name)}
    >
      <a>{name}</a>
    </li>
  );
};

export default Tab;
