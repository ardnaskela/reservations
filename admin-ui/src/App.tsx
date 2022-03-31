import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { CompanyTypeList } from "./companyType/CompanyTypeList";
import { CompanyTypeCreate } from "./companyType/CompanyTypeCreate";
import { CompanyTypeEdit } from "./companyType/CompanyTypeEdit";
import { CompanyTypeShow } from "./companyType/CompanyTypeShow";
import { TimeSlotList } from "./timeSlot/TimeSlotList";
import { TimeSlotCreate } from "./timeSlot/TimeSlotCreate";
import { TimeSlotEdit } from "./timeSlot/TimeSlotEdit";
import { TimeSlotShow } from "./timeSlot/TimeSlotShow";
import { DayOfWeekList } from "./dayOfWeek/DayOfWeekList";
import { DayOfWeekCreate } from "./dayOfWeek/DayOfWeekCreate";
import { DayOfWeekEdit } from "./dayOfWeek/DayOfWeekEdit";
import { DayOfWeekShow } from "./dayOfWeek/DayOfWeekShow";
import { FavoriteCompanyList } from "./favoriteCompany/FavoriteCompanyList";
import { FavoriteCompanyCreate } from "./favoriteCompany/FavoriteCompanyCreate";
import { FavoriteCompanyEdit } from "./favoriteCompany/FavoriteCompanyEdit";
import { FavoriteCompanyShow } from "./favoriteCompany/FavoriteCompanyShow";
import { LastSeenCompanyList } from "./lastSeenCompany/LastSeenCompanyList";
import { LastSeenCompanyCreate } from "./lastSeenCompany/LastSeenCompanyCreate";
import { LastSeenCompanyEdit } from "./lastSeenCompany/LastSeenCompanyEdit";
import { LastSeenCompanyShow } from "./lastSeenCompany/LastSeenCompanyShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { ReservableSlotList } from "./reservableSlot/ReservableSlotList";
import { ReservableSlotCreate } from "./reservableSlot/ReservableSlotCreate";
import { ReservableSlotEdit } from "./reservableSlot/ReservableSlotEdit";
import { ReservableSlotShow } from "./reservableSlot/ReservableSlotShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { CompanySetNotificationList } from "./companySetNotification/CompanySetNotificationList";
import { CompanySetNotificationCreate } from "./companySetNotification/CompanySetNotificationCreate";
import { CompanySetNotificationEdit } from "./companySetNotification/CompanySetNotificationEdit";
import { CompanySetNotificationShow } from "./companySetNotification/CompanySetNotificationShow";
import { ReservationNotificationList } from "./reservationNotification/ReservationNotificationList";
import { ReservationNotificationCreate } from "./reservationNotification/ReservationNotificationCreate";
import { ReservationNotificationEdit } from "./reservationNotification/ReservationNotificationEdit";
import { ReservationNotificationShow } from "./reservationNotification/ReservationNotificationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Reservations"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="CompanyType"
          list={CompanyTypeList}
          edit={CompanyTypeEdit}
          create={CompanyTypeCreate}
          show={CompanyTypeShow}
        />
        <Resource
          name="TimeSlot"
          list={TimeSlotList}
          edit={TimeSlotEdit}
          create={TimeSlotCreate}
          show={TimeSlotShow}
        />
        <Resource
          name="DayOfWeek"
          list={DayOfWeekList}
          edit={DayOfWeekEdit}
          create={DayOfWeekCreate}
          show={DayOfWeekShow}
        />
        <Resource
          name="FavoriteCompany"
          list={FavoriteCompanyList}
          edit={FavoriteCompanyEdit}
          create={FavoriteCompanyCreate}
          show={FavoriteCompanyShow}
        />
        <Resource
          name="LastSeenCompany"
          list={LastSeenCompanyList}
          edit={LastSeenCompanyEdit}
          create={LastSeenCompanyCreate}
          show={LastSeenCompanyShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="ReservableSlot"
          list={ReservableSlotList}
          edit={ReservableSlotEdit}
          create={ReservableSlotCreate}
          show={ReservableSlotShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="CompanySetNotification"
          list={CompanySetNotificationList}
          edit={CompanySetNotificationEdit}
          create={CompanySetNotificationCreate}
          show={CompanySetNotificationShow}
        />
        <Resource
          name="ReservationNotification"
          list={ReservationNotificationList}
          edit={ReservationNotificationEdit}
          create={ReservationNotificationCreate}
          show={ReservationNotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
