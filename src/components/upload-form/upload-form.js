import React, {useEffect, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import styles from './upload-form.module.css'
import utilStyles from '../../assets/global-styles/utils.module.css';
import {toast, ToastContainer} from "react-toastify";
import {uploadBeat} from "../../api/api-calls";
import {ProcessEnum} from "../../models/models";
import Loader from "../loader/loader";

export default function UploadForm() {
	const initDirtyForm = {
		beatName: false,
		beatProd: false,
		audio: false,
		albumImg: false,
		trackoutPrice: false,
		premiumPrice: false,
		exclusivePrice: false
	}

	const [beatName, setBeatName] = useState('');
	const [beatProd, setBeatProd] = useState('');
	const [audio, setAudio] = useState('');
	const [albumImg, setAlbumImg] = useState('');
	const [trackoutPrice, setTrackoutPrice] = useState('');
	const [premiumPrice, setPremiumPrice] = useState('');
	const [exclusivePrice, setExclusivePrice] = useState('');
	const [dirtyForm, setDirtyForm] = useState(initDirtyForm);
	const [uploadStatus, setUploadStatus] = useState('');
	const [pending, setPending] = useState(false);

	useEffect(() => {
		if (uploadStatus === ProcessEnum.success || uploadStatus === ProcessEnum.fail) {
			const toastMe = (status) => {
				let toastType;
				if (status === ProcessEnum.success) toastType = 'success'
				else toastType = 'error';
				toast[toastType](toastType === 'success' ? 'Successfully Uploaded!' : 'Uh Oh Something Went Wrong', {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			toastMe(uploadStatus);
		}
	}, [uploadStatus])

	const handleChange = (e, setFunction, valueParam) => {
		setFunction(e.target.value);
		const dirtyParam = {...dirtyForm};
		dirtyParam[valueParam] = true;
		setDirtyForm(dirtyParam);
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const dirtyEverything = {};
		Object.keys(dirtyForm).forEach((key) => dirtyEverything[key] = true);
		setDirtyForm(dirtyEverything);
		const valid = validForm();
		if (valid) {
			setPending(true);
			const uploadStatus = await uploadBeat(makeBeat());
			if (uploadStatus === ProcessEnum.success) {
				setUploadStatus(ProcessEnum.success);
			} else {
				setUploadStatus(ProcessEnum.fail)
			}
			setPending(false);
		}
	}
	const makeBeat = () => {
		return  {
			beatName: beatName,
			beatProducer: beatProd,
			audioURL: audio,
			albumImage: albumImg,
			trackoutLeasePrice: trackoutPrice,
			premiumLeasePrice: premiumPrice,
			exclusivePrice: exclusivePrice,
			sold: false
		};

	}
	const validForm = () => {
		return !!(beatName && beatProd && audio && albumImg && trackoutPrice && premiumPrice && exclusivePrice);
	}
	return (
		<React.Fragment>
			<div className={styles.formContainer}>
				<form className={styles.form}>
					<TextField
						onChange={(e) => handleChange(e, setBeatName, 'beatName')} className={`${styles.formItem}`}
						required={true}
						id="beatName" label="Beat Name" variant="outlined"/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.beatName ? (beatName ? '' : 'Beat Name Is Required') : ''}</p>
					<TextField
						onChange={(e) => handleChange(e, setBeatProd, 'beatProd')} className={`${styles.formItem}`}
						required={true}
						id='beatproducer' label='Beat Producer' variant='outlined'/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.beatProd ? (beatProd ? '' : 'Beat Producer Is Required') : ''}</p>
					<TextField onChange={(e) => handleChange(e, setAudio, 'audio')} className={`${styles.formItem}`}
							   required={true} id='audio' label='Audio'
							   variant={'outlined'}/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.audio ? (audio ? '' : 'Audio Is Required') : ''}</p>
					{pending ? <Loader/> : ''}
					<TextField onChange={(e) => handleChange(e, setAlbumImg, 'albumImg')}
							   className={`${styles.formItem}`} required={true} id={'albumimg'} label='Album Image'
							   variant={'outlined'}/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.albumImg ? (albumImg ? '' : 'Album Img Is Required') : ''}</p>
					<TextField onChange={(e) => handleChange(e, setTrackoutPrice, 'trackoutPrice')}
							   className={`${styles.formItem}`} required={true} id={'trackoutlease'} type='number'
							   label={'Trackout Lease Price'} value={trackoutPrice} variant={'outlined'}/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.trackoutPrice ? (trackoutPrice ? '' : 'Trackout Lease Price Is Required') : ''}</p>
					<TextField onChange={(e) => handleChange(e, setPremiumPrice, 'premiumPrice')}
							   className={`${styles.formItem}`} required={true} id={'premiumlease'} type={'number'}
							   label={'Premium Lease Price'} variant={'outlined'} value={premiumPrice}/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.premiumPrice ? (premiumPrice ? '' : 'Premium Lease Price Is Required') : ''}</p>
					<TextField onChange={(e) => handleChange(e, setExclusivePrice, 'exclusivePrice')}
							   className={`${styles.formItem}`} required={true} id={'exclusive'} type={'number'}
							   label={'Exclusive Price'} variant={'outlined'} value={exclusivePrice}/>
					<p className={`${utilStyles.errorMessage}`}>{dirtyForm.exclusivePrice ? (exclusivePrice ? '' : 'Exclusive Price Is Required') : ''}</p>
				</form>
			</div>
			<Button variant={'contained'} color={'primary'} onClick={handleSubmit}>Submit</Button>
			<ToastContainer/>
		</React.Fragment>
	)
}
