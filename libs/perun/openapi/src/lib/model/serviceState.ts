/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.23.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Task } from './task';
import { Service } from './service';
import { Facility } from './facility';


export interface ServiceState { 
    service?: Service;
    facility?: Facility;
    task?: Task;
    status?: string;
    blockedOnFacility?: boolean;
    readonly blockedGlobally?: boolean;
    hasDestinations?: boolean;
}

