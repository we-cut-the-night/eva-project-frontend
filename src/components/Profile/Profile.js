import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { PHOTOS } from '../../utils/employees';
import { getEmplName, getDate, getEmplAge } from '../../utils/functions';
import { getEmployeeById } from '../../utils/MainApi';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileWidgetList from '../ProfileWidgetList/ProfileWidgetList';
import './Profile.css';

function Profile() {
  const params = useParams();
  const currentId = params.id;
  const [employee, setEmployee] = useState({});
  const [tags, setTags] = useState([]);

  const [headerData, setHeaderData] = useState({
    photo: null,
    lastname: null,
    firstname: null,
    birth: null,
    location: null,
    datestart: null
  });

  const [widgetsData, setWidgetsData] = useState({
    role: null,
    address: null,
    tags: [],
    todo: [],
    responsiblefor: [],
    workwidth: [],
    aboutme: null,
    contacts: [],
    socials: []
  });

  const getEmployeeData = (id) => {
    getEmployeeById(id)
      .then(data => {
        setEmployee(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getHeaderData = (user, photos) => {
    const data = {
      photo: photos[currentId - 1],
      lastname: user.lastname,
      firstname: getEmplName(user.firstname, user.middlename),
      birth: 'Дата рождения: ' + getDate(user.birth, '/') + ' | ' + getEmplAge(user.birth),
      location: 'Город: ' + user.location,
      datestart: 'Работает с ' + new Date(user.datestart).getFullYear() + ' года'
    };

    setHeaderData(data);
  };

  const getWidgetsData = (user) => {
    const data = {
      role: user.role,
      address: typeof user.spot !== 'undefined' ? user.spot?.address : '',
      tags: [user.role, typeof user.spot !== 'undefined' && user.spot.name, user.depart],
      todo: [],
      responsiblefor: [],
      workwidth: [],
      aboutme: null,
      contacts: [],
      socials: []
    };

    setWidgetsData(data);
  };

  useEffect(() => {
    if (employee) {
      getHeaderData(employee, PHOTOS);
      getWidgetsData(employee);
    };
  }, [employee]);

  useEffect(() => {
    currentId && getEmployeeData(currentId);
  }, [currentId]);

  return (
    <main className='profile'>
      <ProfileHeader data={headerData} />
      <ProfileWidgetList data={widgetsData} />
    </main>
  );
}

export default Profile;
