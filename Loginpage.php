<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "sgp";
    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn) {
        die("sorry we failed to connect." . mysqli_connect_error());
    } else {
        // echo "we connect to database";



        $user_name = $_POST['user_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $cpassword = $_POST['cpassword'];
        $option = ['cost' => 12];
        $hashpassword = password_hash($password, PASSWORD_BCRYPT, $option);

        // if (!preg_match("/^[a-zA-Z ]+$/",$user_name)) {
        //     $name_error = "Name must contain only alphabets and space";
        //     }
        //     if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
        //     $email_error = "Please Enter Valid Email ID";
        //     }
        //     if(strlen($password) < 6) {
        //     $password_error = "Password must be minimum of 6 characters";
        //     }
            // if($password != $cpassword) {
            // alert("Password and Confirm Password doesn't match");
            // }

        // $username1 = $_SESSION['user_name'];


        $sql = "INSERT INTO `sgp1`(`user_name`, `email`, `password`) VALUES ('$user_name','$email','$hashpassword')";
        //    $sql = "insert into 'sgp1'('user_name', 'email' , 'password') values('$user_name' , '$email' , '$password')";

        $result = mysqli_query($conn, $sql);
        if (!$result) {
            die("sorry we failed to insert into database");
        } else {
            // echo "we insert into database";
        }
    }
    mysqli_close($conn);
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>loginpageassignment</title>
    <link rel="stylesheet" href="newlogin_2.css">
    <link rel="stylesheet" href="Example4.css">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <!-- <script src="store.js"></script> -->

<!-- <style>
    ::-webkit-scrollbar{
        width: 100px;
    }

    ::-webkit-scrollbar-thumb{
        background: green;
    }

    ::-webkit-scrollbar-track{
        background: red;
    }
</style> -->
</head>

<body>
    <div class="box">
        <section>
            <div class="box1">
                <img src="logo_2.jpg" alt="not load">
            </div>
            <section class="box2 forms">
                <!-- <center> -->
                    <div class="box3 signin-box">
                        <!-- <img src="/white.jpeg" alt="not loading " > -->
                        <div class="formbox">
                            <h1>Welcome</h1> <br>
                            <!-- <form method="" name=""> -->
                                

                            <form  action="POSRestu.html" name="loginform" onsubmit="return validateForm()" method="">
                                <div class="field input-field"> 
                                    <input type="text" placeholder="Username" name="user_name"  required autofocus> <br>
                                    <br>
                                </div>
                                <div class="field input-field">
                                    <input type="password" name="password" placeholder="Password" class="password">
                                    <i class='bx bx-hide eye-icon'></i>
                                </div>
                                <!-- <div class="inputbox"> <input type="button"  name="Login"> <br>
                            </div> -->
                                <!-- <div class="inputbox">   
                              <button class="inputbox"  type="submit" >Login</button>
                            </div> -->
                                <br>
                                <div class="inputbox"> <input type="submit" value="Log in" name=""> </div>

                                <!-- <div class="inputbox"> <p><a href="">Forget 
                              Password?</a></p> </div>
                              <div class="inputbox"> <input type="submit"
                                    value="Log in" name=""> </div>
                                   <div class="inputbox"> <p>Not a member? <a
                                       href="">Signup</a></p> </div> -->
                                       </form>
                        </div>
                        
                        <div class="form-link">
                            <span>Don't have an account? <a href="#" class="link signup-link">Signup</a></span>
                        </div>
                    </div>
                
                    <div class="box3 signup-box">
                        <div class="formbox">
                            <h1>Welcome</h1> <br>
                                

                            <form  action="" name="loginform" onsubmit="return validateForm()" method="post" enctype="multipart/form-data">
                                <div class="field input-field"> 
                                    <input type="text" placeholder="Username" name="user_name"  required autofocus> <br>
                                    <br>
                                </div>
                                <div class="field input-field"> 
                                    <input type="email" placeholder="Email" name="email"  required> <br>
                                    <br>
                                </div>
                                <div class="field input-field">
                                    <input type="password" name="password" placeholder="Password" class="password">
                                    <!-- <i class='bx bx-hide eye-icon'></i> -->
                                </div>
                                <div class="field input-field">
                                    <input type="password" name="cpassword" placeholder="Confirm password" class="password">
                                    <i class='bx bx-hide eye-icon'></i>
                                </div>
                                <br>
                                <div class="inputbox"> <input type="submit" value="Log in" name=""> </div>
                                </form>
                        </div>
                        
                        
                        <div class="form-link">
                            <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
                        </div>
                    </div>
                <!-- </center> -->
            </section>
        </section>
    </div>
    <script src="store.js"></script>
</body>

</html>
<!-- <img
src=https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/03/17/3126081-2084499922.jpg?itok=LMa0kMbC> -->