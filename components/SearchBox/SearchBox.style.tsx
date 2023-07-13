export const searchBoxContainer = (
  searchBoxWidth: string,
  searchBoxBorderRadius: number,
  searchBoxBackgroundColor: string
) => {
  return {
    left: 8,
    padding: 6,
    alignItems: "center",
    width: searchBoxWidth,
    justifyContent: "center",
    borderRadius: searchBoxBorderRadius,
    backgroundColor: searchBoxBackgroundColor
  }
}