import { withAuth } from '../../src/components/commons/hocs/withAuth'
import CreateArtContainer from '../../src/components/units/art/createArt/CreateArt.Container'
const CreateArtPage = () => {
  return <CreateArtContainer />
}

export default withAuth(CreateArtPage)
