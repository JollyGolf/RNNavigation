    //  navigator.geolocation.getCurrentPosition(
    //    position => {
     //      this.fetchWeather(position.coords.latitude, position.coords.longitude);
    //    },
    //    error => console.log(error,'navigator.error');
    //  );






    //   Promise.resolve(Location.hasServicesEnabledAsync())
    //     .then((value) => this.setState({hasServicesEnabled: value}));
    //   console.log('Promissed - null:', this.state.hasServicesEnabled);
    // }
    // else if(this.state.hasServicesEnabled) console.log('Promissed - true:', this.state.hasServicesEnabled);
    // else if(!this.state.hasServicesEnabled) console.log('Promissed - false:', this.state.hasServicesEnabled);

    // IntentLauncherAndroid.startActivityAsync(IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS);
    // function checkPermission() {
    //   return navigator.geolocation
    //   .getCurrentPosition(
    //     (e) => console.log(e),//this.setState({permission: 'GRANTED'}),
    //     (e) => console.log(e)//this.setState({permission: 'DENIED'})
    //   );
    // }
    // checkPermission();

    // console.log('expo.getCurrentPositionAsync:', Location.getCurrentPositionAsync());
    // console.log('hasServicesEnabledAsync:', Location.hasServicesEnabledAsync());
    // console.log('requestPermissionsAsync:', Location.requestPermissionsAsync());
    // console.log('getCurrentPositionAsync:', Location.getCurrentPositionAsync());
    
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.fetchWeather(position.coords.latitude, position.coords.longitude);
    //   },
    //   error => {
    //     this.setState({
    //       error: 'Error Gettig Weather Condtions'
    //     });
    //   }
    // );