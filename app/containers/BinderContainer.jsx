import {connect} from 'react-redux'
import Binder from '../components/Binder'
import {createContainer} from '../reducers/containers'

const mapStateToProps = null

const mapDispatchToProps = {createContainer}

export default connect(mapStateToProps, mapDispatchToProps)(Binder)