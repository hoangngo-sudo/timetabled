import React from 'react';
import Event from './Event.jsx';
const Calendar = () => {
    return (
        <div className='Calendar'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <Event event='Starbuck ☕' color='green' location='1328 S Halsted St'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color='green' location='6261 N McCormick'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚉' color='pink' location='3132 W Devon Ave'/>
                        <td></td>
                        <td></td>
                        <Event event='The bean 👙' color='blue' location='201 E Randolph St'/>
                    </tr>
                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <Event event='River Cruise 🚢' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Deep Dish 🍕' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚉' color='pink'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Art Institute 🖼️' color='blue'/>
                        <td></td>
                        <Event event='Girl & the goat' color='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3pm</td>
                        <Event event='Cubs game ©️' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚉' color='pink'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shopping 🏪' color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Calendar;