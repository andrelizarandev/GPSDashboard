const PaperStackStyle = {
  MainContainer: {
    display:'flex',
    flexDirection:'column',
    width:'100%'
  },
  MainPaddingContainer: {
    padding:2
  },
  TitleContainer: {
    alignItems:'center',
    flexDirection: {
      xs:'column',
      lg:'row',
    },
    justifyContent: {
      lg:'space-between'
    },
    rowGap: {
      xs:1,
      lg:0
    },
    columnGap: {
      lg:3
    }
  }
}

export default PaperStackStyle;