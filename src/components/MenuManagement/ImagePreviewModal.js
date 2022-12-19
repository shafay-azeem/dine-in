import React from 'react'
import { Modal } from 'react-bootstrap'

const ImagePreviewModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div>
                        <img className="preview" src={props.image} alt="" />

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ImagePreviewModal