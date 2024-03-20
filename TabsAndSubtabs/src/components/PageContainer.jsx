import { useSelector } from "react-redux"

export const PageContainer = () => {
  const content = useSelector(state => {
    const selectedTab = state.tabs[state.selectedTabIndex];
    return selectedTab.subTabs[state.selectedInnerTabIndex].name
  })

  return <>
    <div className="content">{content} page</div>
  </>
}